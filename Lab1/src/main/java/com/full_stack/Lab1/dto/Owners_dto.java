package com.full_stack.Lab1.dto;

public class Owners_dto {

    private Long id;
    private String ownerName;
    private String dateOfBirth; // Изменили тип на String
    private String address;
    private String cellNumber;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCellNumber() {
        return cellNumber;
    }

    public void setCellNumber(String cellNumber) {
        this.cellNumber = cellNumber;
    }

    public Owners_dto() {
    }

    public Owners_dto(Long id, String ownerName, String dateOfBirth, String address, String cellNumber) {
        this.id = id;
        this.ownerName = ownerName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.cellNumber = cellNumber;
    }
}
