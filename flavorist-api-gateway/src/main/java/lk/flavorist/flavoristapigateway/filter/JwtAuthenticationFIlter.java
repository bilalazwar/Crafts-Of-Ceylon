package lk.flavorist.flavoristapigateway.filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Objects;

@Service
public class JwtAuthenticationFIlter extends AbstractGatewayFilterFactory<JwtAuthenticationFIlter.Config> {

    @Autowired
    private RestTemplate restTemplate;

    public JwtAuthenticationFIlter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {

            String path = exchange.getRequest().getPath().toString();

            if (path.equals("/api/authenticate") || path.equals("api/register")) {
                // Bypass filter
                return chain.filter(exchange);
            }
            else {

                if(!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)){
                    throw new RuntimeException("Header is NULL");
                }

                String authHeader;

                try {
                    authHeader = Objects.requireNonNull(exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION)).get(0);
                }
                catch (NullPointerException e){

                    throw new RuntimeException("Null-Pointer ");
                }

                if(authHeader != null && authHeader.startsWith("Bearer ")){

                    System.out.println(authHeader);

                    authHeader = authHeader.substring(7);

                    try {

                        String finalAuthHeader = "Bearer "+authHeader;

                        HttpHeaders headers = new HttpHeaders();
                        headers.set("Authorization", finalAuthHeader);

                        HttpEntity<Void> requestEntity = new HttpEntity<>(headers);

                        String requestUrl = "http://localhost:8082/api/hello";
                        ResponseEntity<String> response = restTemplate.exchange(requestUrl,HttpMethod.GET, requestEntity, String.class);

                        System.out.println(response.getBody());

                        if(response.getBody().equals("authenticated")){
                            // then go to controller logic

                            System.out.println(response.getBody());
                            return chain.filter(exchange);
                        }
                        else{
                            throw new RuntimeException("Invalid access token");
                        }
                    }
                    catch (Exception e){

                        System.out.println("Exception caught on line 78 JwtAuthentication == "+e.getMessage());
                    }
                }
            }
            return null;
        };

    }

    public static class Config {
        // Put the configuration properties
    }

}

//                    authHeader = authHeader.substring(7);
//
//                    HttpHeaders headers = new HttpHeaders();
//                    headers.set("Authorization", "Bearer " + authHeader);
//
//                    String requestUrl = "http://localhost:8080/api/hello";
//                    ResponseEntity<String> response = restTemplate.exchange(requestUrl,HttpMethod.GET, new HttpEntity<>(headers), String.class);
//
//                    if(response.getBody().equals("authenticated")){
//                        // then go to controller logic
//
//                        System.out.println(response.getBody());
//                        return chain.filter(exchange);
//                    }
//                    else{
//                        throw new RuntimeException("Invalid access token");
//                    }