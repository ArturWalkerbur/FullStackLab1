package com.full_stack.Lab1.controllers;

import com.full_stack.Lab1.services.CarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @Autowired
    private CarsService carsService;



}
