package com.full_stack.Lab1.services;



import com.full_stack.Lab1.entity.CarOwnership;

import java.util.List;

public interface CarOwnershipService {

    CarOwnership addCarOwnership(CarOwnership carOwnership);
    List<CarOwnership> getCarOwnerships();
    CarOwnership getCarOwnership(Long id);
    void deleteCarOwnership(CarOwnership carOwnership);
    CarOwnership saveCarOwnership(CarOwnership carOwnership);

}
