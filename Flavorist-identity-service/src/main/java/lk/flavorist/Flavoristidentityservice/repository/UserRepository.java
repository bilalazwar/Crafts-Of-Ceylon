package lk.flavorist.Flavoristidentityservice.repository;

import lk.flavorist.Flavoristidentityservice.data.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query("SELECT c FROM User c WHERE c.username = :username")
    public User findByUsername(String username);

//    later change to optional
}
