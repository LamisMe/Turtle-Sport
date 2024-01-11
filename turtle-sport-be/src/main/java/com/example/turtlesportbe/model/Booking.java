package com.example.turtlesportbe.model;

import jakarta.persistence.*;

@Entity
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String dateBooking;
    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;
    @ManyToOne
    @JoinColumn(name = "employye_id", referencedColumnName = "id")
    private Employee employee;
    private String nameBooking;
    private String phoneNumber;
    @Column(name = "is_deleted", columnDefinition = "int(1) default 0")
    private boolean isDeleted;
    @Column(columnDefinition = "text")
    private String description;
    private Integer startTimeBooking;
    private Integer endTimeBooking;

    public Booking() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDateBooking() {
        return dateBooking;
    }

    public void setDateBooking(String dateBooking) {
        this.dateBooking = dateBooking;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public String getNameBooking() {
        return nameBooking;
    }

    public void setNameBooking(String nameBooking) {
        this.nameBooking = nameBooking;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public Integer getStartTimeBooking() {
        return startTimeBooking;
    }

    public void setStartTimeBooking(Integer startTimeBooking) {
        this.startTimeBooking = startTimeBooking;
    }

    public Integer getEndTimeBooking() {
        return endTimeBooking;
    }

    public void setEndTimeBooking(Integer endTimeBooking) {
        this.endTimeBooking = endTimeBooking;
    }
}
