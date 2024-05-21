package lk.flavorist.Flavoristidentityservice.config;

import lk.flavorist.Flavoristidentityservice.filter.HeaderLoggingFilter;
import lk.flavorist.Flavoristidentityservice.filter.JwtAuthenticationFilter;
import lk.flavorist.Flavoristidentityservice.repository.UserDetailsServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.core.Ordered.LOWEST_PRECEDENCE;

//Marks a Class as a Bean Definition Source: The @Configuration annotation applied to a class signifies that it contains definitions for beans, which are objects managed by the Spring container.
@Configuration
@EnableWebSecurity
// You should always annotate a configuration class with @EnableWebSecurity if you want to use Spring Security for web security in your Spring Boot application.
// This annotation is essential for establishing security rules, authentication mechanisms, and authorization checks in your application.
// Without it, Spring Security features like authentication, authorization, and filter chains won't be functional.
public class Config {

    @Autowired
    private UserDetailsServiceImp userDetailsServiceImp;

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    private HeaderLoggingFilter headerLoggingFilter;

    // Spring Security injects the registered security filters into the ApplicationFilterChain maintained by Tomcat.
    @Bean
//    @Order(LOWEST_PRECEDENCE) ----> only for Filters not chain
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception { // spring creates a instance of HttpSecurity and passes it to the parameter
        httpSecurity
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeRequests(auth -> auth
                        .requestMatchers("/api/authenticate", "/api/register").permitAll()  // Allow access to these endpoints without authentication
//                        .requestMatchers("/api/admin/**").hasAnyRole("ADMIN") // Only allow users with ADMIN role to access /api/admin/** endpoints
                        .requestMatchers("/api/**").authenticated()
                        .anyRequest().authenticated()  // Require authentication for all other requests
                )
                .userDetailsService(userDetailsServiceImp) // Spring Security relies on this interface and its implementation to retrieve user information for authentication purposes. requires a java class that implements UserDetailsService
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)  // wants to execute this filter before usernamePassword authentication Filter
                .addFilterBefore(headerLoggingFilter, UsernamePasswordAuthenticationFilter.class); // relies on UserDetailsService implementation class
        return httpSecurity.build();
    }

//    HttpSecurity acts as the builder for configuring security parameters, while SecurityFilterChain is the final object representing the chain of

//    @Bean
//    public SecurityFilterChain twoSecurityFilterChain(HttpSecurity http) throws Exception {
//        http
//                .csrf(AbstractHttpConfigurer::disable) // Optional: Disable CSRF
//                .authorizeHttpRequests(auth -> auth
//                .requestMatchers("/asp/authenticate", "/asp/register").permitAll() // Allow these without authentication
//                .requestMatchers("/asp/**").authenticated() // Require authentication for all "/api/*" paths
//                .anyRequest().denyAll() // Deny all other requests for this chain
//                )
//                // ... other security configurations for the API chain
//                .userDetailsService(userDetailsServiceImp)
//                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
//        return http.build();
//    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
//    @Bean
//    public School getSchool() {
//        // Optional: Configure the School object here before returning it
//        return new School();
//    }

//    @Bean Annotation:
//    This annotation tells Spring to create an instance of this method as a Spring bean. This bean will be managed by the Spring container and can be injected into other parts of your application where needed.
}



//.logout(logout -> logout // Configure logout functionality
//        .logoutUrl("/logout") // Define the logout endpoint URL (e.g., "/logout")
//                    .logoutSuccessHandler(new LogoutSuccessHandler() { // Optional: Handle successful logout
//    @Override
//    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
//        // Perform actions after successful logout (e.g., invalidate session, redirect)
//        response.setStatus(HttpServletResponse.SC_OK); // Set successful response code
//    }
//})
//        )