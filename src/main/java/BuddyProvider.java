import com.codeforgood.DAO.BuddyDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;

//@org.springframework.web.bind.annotation.RestController
public class BuddyProvider {
@Autowired
   private BuddyDAO buddyDAO;

public void init(){


    System.out.println("I m booted"+buddyDAO);

}
    public static void main(String[] args) throws Exception {
        SpringApplication.run(BuddyProvider.class, args);
    }
}
