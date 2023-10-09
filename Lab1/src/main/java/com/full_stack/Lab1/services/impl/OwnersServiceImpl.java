package com.full_stack.Lab1.services.impl;

import com.full_stack.Lab1.entity.Owners;
import com.full_stack.Lab1.repository.OwnersRepository;
import com.full_stack.Lab1.services.OwnersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OwnersServiceImpl implements OwnersService {

    @Autowired
    private OwnersRepository ownersRepository;

    @Override
    public Owners addOwner(Owners owners) {
        return ownersRepository.save(owners);
    }

    @Override
    public List<Owners> getOwners() {
        return ownersRepository.findAll();
    }

    @Override
    public Owners getOwner(Long id) {
        return ownersRepository.getById(id);
    }

    @Override
    public void deleteOwner(Owners owner) {
        ownersRepository.delete(owner);
    }

    @Override
    public Owners saveOwner(Owners owner) {
        return ownersRepository.save(owner);
    }
}
