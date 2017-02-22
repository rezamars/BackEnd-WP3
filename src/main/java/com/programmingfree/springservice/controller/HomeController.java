package com.programmingfree.springservice.controller;

import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @Secured(value = {"USER", "ADMIN"})
    @RequestMapping("/")
    public String home() {
        return "index";
    }
    @Secured(value = {"USER", "ADMIN"})
    @RequestMapping("/login")
    public String login(){
        return "login";
    }

    @Secured(value = {"ADMIN"})
    @RequestMapping("/adminstart1")
    public String adminstart() {
        return "adminstart1";
    }

    @Secured(value = {"ADMIN"})
    @RequestMapping("/admindelete")
    public String admindelete(){
        return "admindelete";
    }

    @Secured(value = {"ADMIN"})
    @RequestMapping("/admininsert")
    public String admininsert(){
        return "admininsert";
    }

    @Secured(value = {"ADMIN"})
    @RequestMapping("/adminedit")
    public String adminedit(){
        return "adminedit";
    }

}
