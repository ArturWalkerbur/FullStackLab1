package com.full_stack.Lab1.services;


import com.full_stack.Lab1.entity.Owners;

import java.util.List;

public interface OwnersService {

    Owners addOwner(Owners owners);
    List<Owners> getOwners();
    Owners getOwner(Long id);
    void deleteOwner(Owners owner);
    Owners saveOwner(Owners owner);

}
