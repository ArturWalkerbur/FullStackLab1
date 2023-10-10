package com.full_stack.Lab1.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.full_stack.Lab1.dto.Owners_dto;
import com.full_stack.Lab1.dto.Renters_dto;
import com.full_stack.Lab1.entity.*;
import com.full_stack.Lab1.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Controller
@RestController
public class MainController {



    @Autowired
    private CarsService carsService;

    @Autowired
    private OwnersService ownersService;

    @Autowired
    private RentersService rentersService;

    @Autowired
    private CarOwnershipService ownershipService;

    @Autowired
    private CarRentalService rentalService;

    @GetMapping("/getAllCars")
    @ResponseBody
    public List<Cars> getCarsTable(){
        List<Cars> cars = carsService.getALlCars();
        return cars;
    }

    @GetMapping("/getAllOwners")
    @ResponseBody
    public List<Owners> getOwnersTable(){
        List<Owners> owners = ownersService.getOwners();
        return owners;
    }

    @GetMapping("/getAllRenters")
    @ResponseBody
    public List<Renters> getRentersTable(){
        List<Renters> renters = rentersService.getRenters();
        return renters;
    }

    @GetMapping("/getAllOwnerships")
    @ResponseBody
    public List<CarOwnership> getCarOwnershipTable(){
        List<CarOwnership> ownerships = ownershipService.getCarOwnerships();
        return ownerships;
    }

    @GetMapping("/getAllRentals")
    @ResponseBody
    public List<CarRental> getCarRentalTable(){
        List<CarRental> rentals = rentalService.getCarRentals();
        return rentals;
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

    @GetMapping("/getOwner/{id}")
    @ResponseBody
    public Owners getOneOwner(@PathVariable(name = "id")Long id){
        List<Owners> owners = ownersService.getOwners();
        Owners owner = null;
        for (int i = 0; i < owners.size(); i++) {
            if(owners.get(i).getId() == id){
                owner = owners.get(i);
            }
        }
        return owner;
    }

    @GetMapping("/getRenter/{id}")
    @ResponseBody
    public Renters getOneRenter(@PathVariable(name = "id")Long id){
        List<Renters> renters = rentersService.getRenters();
        Renters renter = null;
        for (int i = 0; i < renters.size(); i++) {
            if(renters.get(i).getId() == id){
                renter = renters.get(i);
            }
        }
        return renter;
    }

    @GetMapping("/getOwnership/{id}")
    @ResponseBody
    public CarOwnership getOneOwnership(@PathVariable(name = "id")Long id){
        List<CarOwnership> ownerships = ownershipService.getCarOwnerships();
        CarOwnership ownership = null;
        for (int i = 0; i < ownerships.size(); i++) {
            if(ownerships.get(i).getId() == id){
                ownership = ownerships.get(i);
            }
        }
        return ownership;
    }

    @GetMapping("/getRental/{id}")
    @ResponseBody
    public CarRental getOneRental(@PathVariable(name = "id")Long id){
        List<CarRental> rentals = rentalService.getCarRentals();
        CarRental rental = null;
        for (int i = 0; i < rentals.size(); i++) {
            if(rentals.get(i).getId() == id){
                rental = rentals.get(i);
            }
        }
        return rental;
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

    @PostMapping("/addNewOwner")
    @ResponseBody
    public String addNewOwner(@RequestBody Owners_dto newOwner){

        try{
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            java.util.Date utilDate = dateFormat.parse(newOwner.getDateOfBirth());
            ownersService.addOwner(new Owners(null, newOwner.getOwnerName(), new java.sql.Date(utilDate.getTime()), newOwner.getAddress(), newOwner.getCellNumber()));

        }catch (Exception e){
            e.printStackTrace();
        }


        return "New owner added!";
    }

    @PostMapping("/addNewRenter")
    @ResponseBody
    public String addNewRenter(@RequestBody Renters_dto newRenter){

        try{
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            java.util.Date utilDate = dateFormat.parse(newRenter.getDateOfBirth());

            rentersService.addRenter(new Renters(null, newRenter.getRenterName(), new java.sql.Date(utilDate.getTime()), newRenter.getAddress(), newRenter.getCellNumber(), newRenter.getTrustedCellNumber(), newRenter.getIin()));

        }catch (Exception e){
            e.printStackTrace();
        }


        return "New renter added!";
    }

    @PostMapping("/addNewOwnership")
    @ResponseBody
    public String addNewOwnership (@RequestBody CarOwnership newOwnership){

        try{

            ownershipService.addCarOwnership(new CarOwnership(null, newOwnership.getCar(), newOwnership.getOwner(), newOwnership.getOwnershipStartDate(), newOwnership.getOwnershipEndDate()));

        }catch (Exception e){
            e.printStackTrace();
        }


        return "New ownership added!";
    }

    @PostMapping("/addNewRental")
    @ResponseBody
    public String addNewRental (@RequestBody CarRental newRental){

        try{

            rentalService.addCarRental(new CarRental(null, newRental.getCar(), newRental.getRenter(), newRental.getRentalStartDate(), newRental.getRentalEndDate()));

        }catch (Exception e){
            e.printStackTrace();
        }


        return "New rental added!";
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

    @DeleteMapping("/deleteOwner/{id}")
    @ResponseBody
    public String deleteOwner(@PathVariable(name = "id")Long id){

        Owners owner = new Owners();

        try{
            owner = ownersService.getOwner(id);

            ownersService.deleteOwner(owner);

            return "Owner is deleted!";

        }catch (Exception e){

            e.printStackTrace();
            return "Something wrong!";

        }

    }

    @DeleteMapping("/deleteRenter/{id}")
    @ResponseBody
    public String deleteRenter(@PathVariable(name = "id")Long id){

        Renters renter = new Renters();

        try{
            renter = rentersService.getRenter(id);

            rentersService.deleteRenter(renter);

            return "Renter is deleted!";

        }catch (Exception e){

            e.printStackTrace();
            return "Something wrong!";

        }

    }

    @DeleteMapping("/deleteOwnership/{id}")
    @ResponseBody
    public String deleteOwnership(@PathVariable(name = "id")Long id){

        CarOwnership ownership = new CarOwnership();

        try{
            ownership = ownershipService.getCarOwnership(id);

            ownershipService.deleteCarOwnership(ownership);

            return "Ownership is deleted!";

        }catch (Exception e){

            e.printStackTrace();
            return "Something wrong!";

        }

    }

    @DeleteMapping("/deleteRental/{id}")
    @ResponseBody
    public String deleteRental(@PathVariable(name = "id")Long id){

        CarRental rental = new CarRental();

        try{
            rental = rentalService.getCarRental(id);

            rentalService.deleteCarRental(rental);

            return "Rental is deleted!";

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


    @PostMapping("/editOwner")
    @ResponseBody
    public String updateOwner(@RequestBody Owners updateOwner){

        try{

            Owners owners = ownersService.getOwner(updateOwner.getId());

            ownersService.saveOwner(new Owners(updateOwner.getId(), updateOwner.getOwnerName(), updateOwner.getDateOfBrith(), updateOwner.getAddress(), updateOwner.getCellNumber()));

            return "The owner has been updated!";

        }catch (Exception e){
            e.printStackTrace();
            return "Something wrong!";
        }

    }

    @PostMapping("/editRenter")
    @ResponseBody
    public String updateRenter(@RequestBody Renters updateRenter){

        try{

            Renters renters = rentersService.getRenter(updateRenter.getId());

            rentersService.saveRenter(new Renters(updateRenter.getId(), updateRenter.getRenterName(), updateRenter.getDateOfBrith(), updateRenter.getAddress(), updateRenter.getCellNumber(), updateRenter.getTrustedCellNumber(), updateRenter.getIIN()));

            return "The renter has been updated!";

        }catch (Exception e){
            e.printStackTrace();
            return "Something wrong!";
        }

    }

    @PostMapping("/editOwnership")
    @ResponseBody
    public String updateOwnership(@RequestBody CarOwnership updateOwnership){

        try{

            CarOwnership ownership = ownershipService.getCarOwnership(updateOwnership.getId());

            ownershipService.saveCarOwnership(new CarOwnership(updateOwnership.getId(), updateOwnership.getCar(), updateOwnership.getOwner(), updateOwnership.getOwnershipStartDate(), updateOwnership.getOwnershipEndDate()));

            return "The ownership has been updated!";

        }catch (Exception e){
            e.printStackTrace();
            return "Something wrong!";
        }

    }

    @PostMapping("/editRental")
    @ResponseBody
    public String updateRental(@RequestBody CarRental updateRental){

        try{

            CarRental rental = rentalService.getCarRental(updateRental.getId());

            rentalService.saveCarRental(new CarRental(updateRental.getId(), updateRental.getCar(), updateRental.getRenter(), updateRental.getRentalStartDate(), updateRental.getRentalEndDate()));

            return "The rental has been updated!";

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
