package com.full_stack.Lab1.services;

import com.full_stack.Lab1.entity.Renters;

import java.util.List;

public interface RentersService {


    Renters addRenter(Renters renters);
    List<Renters> getRenters();
    Renters getRenter(Long id);
    void deleteRenter(Renters renter);
    Renters saveRenter(Renters renter);

}
