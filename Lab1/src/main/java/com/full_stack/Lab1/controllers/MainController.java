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
import org.springframework.web.bind.annotation.*;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
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

    @PostMapping("/addNewCar")
    @ResponseBody
    public String addNewCar(@RequestParam(name = "car_name") String car_name,
                            @RequestParam(name = "model") String model,
                            @RequestParam(name = "year") String year,
                            @RequestParam(name = "volume") String volume){

        try{

            carsService.addCar(new Cars(null, car_name, model, Long.parseLong(year), Double.parseDouble(volume)));

        }catch (Exception e){
            e.printStackTrace();
        }


        return "New car added!";
    }

    @DeleteMapping("/deleteCar/{id}")
    @ResponseBody
    public String deleteCar(@PathVariable(name = "id")Long id){

        Cars car = new Cars();

        try{
            car = carsService.getCar(id);

            carsService.deleteCars(car);

            return "Car is deleted!";

        }catch (Exception e){

            e.printStackTrace();
            return "Something wrong!";

        }

    }

    @PostMapping("/editCar")
    @ResponseBody
    public String updateCar(@RequestParam(name = "carid") Long id,
                            @RequestParam(name = "car_name") String car_name,
                            @RequestParam(name = "model") String model,
                            @RequestParam(name = "year") String year,
                            @RequestParam(name = "volume") String volume){

        try{

            Cars cars = carsService.getCar(id);

            carsService.saveCars(new Cars(id, car_name, model, Long.parseLong(year), Double.parseDouble(volume)));

            return "The car has been updated!";

        }catch (Exception e){
            e.printStackTrace();
            return "Something wrong!";
        }

    }

}
