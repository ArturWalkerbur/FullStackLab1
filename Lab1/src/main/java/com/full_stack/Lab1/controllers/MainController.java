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
    public String addNewCar(@RequestParam(name = "carname") String carname,
                            @RequestParam(name = "model") String model,
                            @RequestParam(name = "year") String year,
                            @RequestParam(name = "volume") String volume){

        try{

            carsService.addCar(new Cars(null, carname, model, Long.parseLong(year), Double.parseDouble(volume)));

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
                            @RequestParam(name = "carname") String carname,
                            @RequestParam(name = "model") String model,
                            @RequestParam(name = "year") String year,
                            @RequestParam(name = "volume") String volume){

        try{

            Cars cars = carsService.getCar(id);

            carsService.saveCars(new Cars(id, carname, model, Long.parseLong(year), Double.parseDouble(volume)));

            return "The car has been updated!";

        }catch (Exception e){
            e.printStackTrace();
            return "Something wrong!";
        }

    }

    @GetMapping("/searchCars/{text}")
    @ResponseBody
    public List<Cars> getSearchCars(@PathVariable(name = "text")String text){
        List<Cars> cars = carsService.searchCars(text);
        return cars;
    }

    @GetMapping("/filterByYear/{year}")
    @ResponseBody
    public List<Cars> getFilteredCars(@PathVariable(name = "year")String year){
        List<Cars> cars = carsService.filterCars(Long.parseLong(year));
        return cars;
    }

    @GetMapping("/filterByVolume/{volume}")
    @ResponseBody
    public List<Cars> getFilteredCars2(@PathVariable(name = "volume")String volume){
        List<Cars> cars = carsService.filterCars2(Double.parseDouble(volume));
        return cars;
    }

}
