package com.full_stack.Lab1.services;



import com.full_stack.Lab1.entity.CarRental;

import java.util.List;

public interface CarRentalService {

    CarRental addCarRental(CarRental carRental);
    List<CarRental> getCarRentals();
    CarRental getCarRental(Long id);
    void deleteCarRental(CarRental carRental);
    CarRental saveCarRental(CarRental carRental);

}
