package com.full_stack.Lab1.services;

import com.full_stack.Lab1.entity.Cars;

import java.util.List;

public interface CarsService {

    Cars addCar(Cars cars);
    List<Cars> getALlCars();
    Cars getCar(Long id);
    void deleteCars(Cars cars);
    Cars saveCars(Cars cars);

}
