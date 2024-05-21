package lk.flavorist.Flavoristidentityservice.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lk.flavorist.Flavoristidentityservice.data.User;
import lk.flavorist.Flavoristidentityservice.repository.UserDetailsServiceImp;
import lk.flavorist.Flavoristidentityservice.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Service
public class JwtAuthenticationFilter extends OncePerRequestFilter {
//    @PreAuthorize ---------- use this
//    change to HeadersLoginFilter
    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserDetailsServiceImp userDetailsServiceImp;

//    ApplicationFilterChain

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        String token=null;
        String username=null;
        String authHeader = null;

        authHeader = request.getHeader("Authorization");
//        extract the value of the "Authorization" header from the HTTP request

        if(authHeader == null || !authHeader.startsWith("Bearer ")){

            filterChain.doFilter(request,response);
//            request is handed over to the next filter in the chain.
//            This enables the subsequent filters to perform their respective security checks and potentially modify the request or response as needed.
//            These filters are arranged in a predefined order, and each filter has the opportunity to inspect the request, perform security checks,
//            modify the request or response, or decide whether to allow the request to proceed further in the chain.
//            By calling filterChain.doFilter(request, response), your filter ensures it participates in the chain and allows subsequent filters to perform their security-related tasks.

//            if not written filter doesn't hand over control to the next filter in the chain
//            The request would not be processed by any further security filters, potentially bypassing crucial security checks and potentially leading to vulnerabilities.

//            why it's necessary to call filterChain.doFilter(request, response) even when auth header is null
//            However, Spring Security might have other ways to handle unauthenticated requests, such as redirecting to a login page or returning an unauthorized response.
//            These filters might be responsible for:
//            Throwing an AuthenticationException
//            Redirecting to a login page
//            Returning a 401 (Unauthorized) response
//            Employing alternative authentication mechanisms (e.g., form-based login)
        }

        if(authHeader != null && authHeader.startsWith("Bearer ")){

            token = authHeader.substring(7);
            username = jwtService.extractUsername(token);
        }

        if(authHeader !=null && SecurityContextHolder.getContext().getAuthentication()==null){

            User user = userDetailsServiceImp.loadUserByUsername(username);

            if(jwtService.isTokenValid(token,user)){

                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        user.getUsername(),// earlier passed user
                        null, // null because the token doesn't store the actual password for security reasons.
                        user.getAuthorities()
                );
//                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
                // SecurityContextHolder acts as the central repository that holds the currently authenticated user's details
            }
        }
        filterChain.doFilter(request,response); // passing hands to the next filter as always
    }
}

//        authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        // sets additional details about the authentication attempt
        // setDetails -- This method allows you to attach additional context information related to the authentication attempt

        // authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        // Used to set additional details about the authentication attempt ( authToken )

        // new WebAuthenticationDetailsSource().buildDetails(request)
        // new WebAuthenticationDetailsSource() - This creates a new instance of the WebAuthenticationDetailsSource class.
        // This class (assuming you're using Spring Security in a web application) is designed to extract relevant details from an HTTP request object.
        //
        // .buildDetails(request) -- This method of WebAuthenticationDetailsSource takes the HTTP request object (request) as an argument. It then
        // extracts various details from the request, such as:
        //                                   Remote IP address of the user making the request
        //                                   Session ID (if applicable)
        //                                   User-Agent header (information about the browser or client)
        //                                   Other request headers (depending on configuration)
        //



//        Purpose of Authentication Details:
//
//        While not strictly mandatory, setting these details can be beneficial for several reasons:
//                Auditing: You can use the details to audit who accessed resources and from where, aiding in security analysis.
//                Security Analysis: The IP address can be used to detect potential suspicious login attempts from unusual locations.
//                Multi-Factor Authentication (MFA): Some MFA systems might utilize the IP address or device information for additional verification steps.









// SecurityContextHolder.getContext()
//  retrieves the current Security Context for the thread. The Security Context holds the current authentication state for the thread, including the authenticated user

// .setAuthentication(authToken)
// sets the previously created authToken (containing the username and authorities) as the current authentication for the thread.
// This essentially tells Spring Security which user is considered authenticated for this specific request or thread.



// SecurityContextHolder
// ---------------------

//managing the current authentication state for a thread
//Spring Security's SecurityContextHolder acts like a hidden compartment for each thread, holding the currently
// authenticated user's info (username, roles) through the SecurityContext. This allows different parts of your
// application to easily check "who's logged in right now" for authorization decisions and user information access.

//  each thread in your application has its own independent copy of the Security Context. This is important because different requests or background processes might have different users authenticated at the same time.

// SecurityContext accessed through SecurityContextHolder, holds the user's info (username, roles) after successful authentication.



// Good Definition read surely
//-------------------------------

// SecurityContext: This holds the details of the currently authenticated user, also known as the principal. It includes information like username, roles, and any other security-related data specific to the request.
// SecurityContextHolder: This acts like a container for the SecurityContext. It provides a way to access the SecurityContext from anywhere in your application thread. By default, it uses a ThreadLocal mechanism, meaning each thread has its own SecurityContext.