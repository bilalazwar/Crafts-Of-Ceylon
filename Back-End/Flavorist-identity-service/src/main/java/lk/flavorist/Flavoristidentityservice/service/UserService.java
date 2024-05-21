package lk.flavorist.Flavoristidentityservice.service;

import lk.flavorist.Flavoristidentityservice.data.User;
import lk.flavorist.Flavoristidentityservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    public User createUser(User user){

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public String authenticate(User user){
        // when authentication done in doFilter one per request we did not check the password with the username

        try {
            String encodedPassword = passwordEncoder.encode(user.getPassword());

            UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                    user.getUsername(),
                    user.getPassword()
            );
            Authentication authentication = authenticationManager.authenticate(token);          // leverage the functionality provided by a UserDetailsService implementation like your UserDetailsServiceImp class. to authenticate
            User authenticatedUser = (User) authentication.getPrincipal(); // casting the returned obj to User object
            // In Spring Security, the principal object typically represents the authenticated user.
            // It's often a UserDetails implementation

            System.out.println("Tokens password is ----- " +token.getCredentials());
            System.out.println("Authentication password is --- "+authentication.getCredentials());
            System.out.println("Users password is ----- "+authenticatedUser.getPassword());

            // A configured PasswordEncoder (usually set up automatically) is used for this comparison.

            //  It delegates to custom UserDetailsServiceImp to authenticate the user
            if(authentication.isAuthenticated()){

                return jwtService.generateToken(authenticatedUser);
            }
            else{
                return "User not authenticated";
            }
        }
        catch (AuthenticationException e){

            return "Unable to authenticate due to invalid username or password ---"+e.getMessage();
        }
        catch (Exception e){
            return "Super-class Exception -- "+e.getMessage();
        }


    }
}
