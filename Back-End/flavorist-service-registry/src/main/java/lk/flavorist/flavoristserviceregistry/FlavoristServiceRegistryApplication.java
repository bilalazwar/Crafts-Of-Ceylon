package lk.flavorist.flavoristserviceregistry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class FlavoristServiceRegistryApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlavoristServiceRegistryApplication.class, args);
	}

}
