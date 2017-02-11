package com.programmingfree.springservice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class HomeController {

	@RequestMapping("/home")
	public String home() {
		return "index";
	}
	/*
	@RequestMapping(method=RequestMethod.GET)
	public String getDataFromDB(){
		return "Hejsan hoppsan!";
	}
	*/
}
