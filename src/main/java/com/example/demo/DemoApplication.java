package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@SpringBootApplication
@org.springframework.web.bind.annotation.RestController
@ImportResource("classpath:appcontext-config.xml")
public class DemoApplication {

	@RequestMapping("/")
	@ResponseBody
	String home() {
		return "Hello World!";
	}

	@RequestMapping("/listBuddies")
	@ResponseBody
	test listBuddies() {

		return new test();
	}
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	class test{
		private String m="v";

		public String getM() {
			return m;
		}

		public void setM(String m) {
			this.m = m;
		}
	}
}
