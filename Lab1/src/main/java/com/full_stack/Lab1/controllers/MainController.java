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
import java.util.ArrayList;
import java.util.List;

@Controller
@RestController
public class MainController {



    @Autowired
    private CarsService carsService;

    @GetMapping("/getAllCars")
    @ResponseBody
    public List<Cars> getCarsTable(){
        List<Cars> cars = carsService.getALlCars();
        return cars;
    }

    @GetMapping("/getCar/{id}")
    @ResponseBody
    public Cars getOneCar(@PathVariable(name = "id")Long id){
        List<Cars> cars = carsService.getALlCars();
        Cars car = null;
        for (int i = 0; i < cars.size(); i++) {
            if(cars.get(i).getId() == id){
                car = cars.get(i);
            }
        }
        return car;
    }

    @PostMapping("/addNewCar")
    @ResponseBody
    public String addNewCar(@RequestBody Cars newCar){

        try{

            carsService.addCar(new Cars(null, newCar.getCarname(), newCar.getModel(), newCar.getYear(), newCar.getVolume()));

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
    public String updateCar(@RequestBody Cars updateCar){

        try{

            Cars cars = carsService.getCar(updateCar.getId());

            carsService.saveCars(new Cars(updateCar.getId(), updateCar.getCarname(), updateCar.getModel(), updateCar.getYear(), updateCar.getVolume()));

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

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/test")
    @ResponseBody
    public String test(@RequestParam("number") int number){

        try{

            System.out.println(number);

        }catch (Exception e){
            e.printStackTrace();
        }


        return "All is OK!";
    }

}
