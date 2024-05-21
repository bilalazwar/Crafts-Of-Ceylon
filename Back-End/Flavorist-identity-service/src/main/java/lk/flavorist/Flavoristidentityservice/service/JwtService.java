package lk.flavorist.Flavoristidentityservice.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lk.flavorist.Flavoristidentityservice.data.User;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;

@Service
public class JwtService {

//    when logout expire the Token
    private final String SECRET_KEY = "RFycS6t8KXZPk7C2H8Mnk80Qj7lT+tSTDh/DA3j+zqGmfuVsRtT50K9OKI1k/Hm0";

    public String generateToken(User user){

//        Jwts.builder retrns JwtBuilder. All methods in JwtBuilder are static.
//        Builder design pattern used

        String token = Jwts
                .builder()
                .subject(user.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + 1000*60*30))// 1000 milliseconds * 60 = 1 minute * 30 = 30 minutes.
                .claim("Roles",user.getRole())      // add custom claims
                .signWith(getSignInKey())
                .compact(); //packs the JWT into a URL-safe string

        return token;
    }

    private SecretKey getSignInKey() { // secured by making it private

        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);

        // When used online editor to generate a secret key, it likely generates a random sequence of bytes( numbers representing data).
        // Base64 encoding is then applied to this byte sequence. This encoding allows you to easily copy, paste, and store the secret key in text formats that might have limitations with raw binary data
        // Base64 is a common encoding scheme that represents binary data (like raw bytes) using a set of 64 printable characters (A-Z, a-z, 0-9, +, /).

        // Your code uses the Decoders.BASE64.decode method (likely from the J JWT library) to convert the Base64-encoded string back into its original raw byte format.
        // This is necessary because cryptographic algorithms like HMAC SHA used for signing JWTs typically operate on raw byte data.

        // return Keys.hmacShaKeyFor(keyBytes);
        // a static method within Keys class.
        // takes the raw key data and transforms it into a proper SecretKey object encapsulates the key data and the algorithm it's intended for (HMAC SHA in this case).
        // takes secret key in Byte array and creates a SecretKey object that encapsulates the kay and the algorithm according to the size
    }

    public Claims extractAllClaims(String token){

        return Jwts
                .parser() // static method returns JwtParserBuilder
                .verifyWith(getSignInKey())
                .build()  // returns a JwtParser
                .parseSignedClaims(token)
                .getPayload();   // get only payload data into Jwt


        // JWT parsing refers to the process of breaking down a JWT into its individual components and extracting the information it contains.

        // Jwts.parser() - creates a JwtParserBuilder object.
        //               - Helps configure JWTParser

        // build()   - Finalizes the construction of the JwtParserBuilder object based on the "configuration"
        //           - and returns a fully configured JwtParser object

        // JwtParserBuilder - For Configuration
        // JwtParser        - for actual parsing, and then extracts the claims from the parsed JWT.

    }

    public String extractUsername(String token){

        final Claims claims = extractAllClaims(token);
        return claims.getSubject();
//        claims.get("Role"); -- can get user Role customer payload
    }

    public Date extractExpiration(String token){
        final Claims claims = extractAllClaims(token);
        return claims.getExpiration();
    }

    public boolean isTokenExpired(String token){

        final Claims claims = extractAllClaims(token);
        return extractExpiration(token).before(new Date());
    }

    public boolean isTokenValid(String token, User user){

        final String token_username = extractUsername(token);
        final String database_username = user.getUsername();

        return token_username.equals(database_username) && !isTokenExpired(token);
    }

    public String extractRole(String token){
        final Claims claims = extractAllClaims(token);
        return claims.get("Role",String.class);
    }




}
