import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

//@org.springframework.web.bind.annotation.RestController
public class SampleController {


public void init(){


    System.out.println("I m booted");
}
    public static void main(String[] args) throws Exception {
        SpringApplication.run(SampleController.class, args);
    }
}
