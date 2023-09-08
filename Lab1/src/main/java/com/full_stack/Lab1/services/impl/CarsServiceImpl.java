package com.full_stack.Lab1.services.impl;

import com.full_stack.Lab1.entity.Cars;
import com.full_stack.Lab1.repository.CarsRepository;
import com.full_stack.Lab1.services.CarsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarsServiceImpl implements CarsService {

    @Autowired
    private CarsRepository carsRepository;


    @Override
    public Cars addCar(Cars cars) {
        return carsRepository.save(cars);
    }

    @Override
    public List<Cars> getALlCars() {
        return carsRepository.findAll();
    }

    @Override
    public Cars getCar(Long id) {
        return carsRepository.getOne(id);
    }

    @Override
    public void deleteCars(Cars cars) {
        carsRepository.delete(cars);
    }

    @Override
    public Cars saveCars(Cars cars) {
        return carsRepository.save(cars);
    }
}
