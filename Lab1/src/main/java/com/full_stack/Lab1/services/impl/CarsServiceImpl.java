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
    public List<Cars> searchCars(String text) {
        return carsRepository.findAllByCarnameOrModel(text, text);
    }

    @Override
    public List<Cars> filterCars(Long year) {
        return carsRepository.findAllByYear(year);
    }

    @Override
    public List<Cars> filterCars2(double volume) {
        return carsRepository.findAllByVolume(volume);
    }

    @Override
    public Cars getCar(Long id) {
        return carsRepository.getById(id);
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
