package com.full_stack.Lab1.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.full_stack.Lab1.entity.Cars;
import com.full_stack.Lab1.services.CarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class MainController {

    @Autowired
    private CarsService carsService;

    @GetMapping("/getAllCars")
    @ResponseBody
    public List<Cars> getCarsTable(){
        List<Cars> cars = carsService.getALlCars();
        return cars;
    }

}
