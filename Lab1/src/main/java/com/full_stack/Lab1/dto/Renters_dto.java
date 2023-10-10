package com.full_stack.Lab1.dto;


public class Renters_dto {

    private Long id;
    private String renterName;
    private String dateOfBirth;
    private String address;
    private String cellNumber;
    private String trustedCellNumber;
    private String iin;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRenterName() {
        return renterName;
    }

    public void setRenterName(String renterName) {
        this.renterName = renterName;
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

    public String getTrustedCellNumber() {
        return trustedCellNumber;
    }

    public void setTrustedCellNumber(String trustedCellNumber) {
        this.trustedCellNumber = trustedCellNumber;
    }

    public String getIin() {
        return iin;
    }

    public void setIIN(String iin) {
        this.iin = iin;
    }

    public Renters_dto() {
    }

    public Renters_dto(Long id, String renterName, String dateOfBirth, String address, String cellNumber, String trustedCellNumber, String iin) {
        this.id = id;
        this.renterName = renterName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.cellNumber = cellNumber;
        this.trustedCellNumber = trustedCellNumber;
        this.iin = iin;
    }
}
