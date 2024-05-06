package lk.flavorist.flavoristapigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class FlavoristApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlavoristApiGatewayApplication.class, args);
	}

}
