package com.example.turtlesportbe.model;

import com.example.turtlesportbe.model.auth.Account;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @Column(name = "birthday")
    private String birthDay;
    private String phoneNumber;
    private String email;
    private String address;
    @Column(name = "is_deleted", columnDefinition = "int(1) default 0")
    private boolean isDeleted;
    @JsonBackReference
    @OneToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private Account account;
    @JsonBackReference
    @OneToMany(mappedBy = "customer")
    private Set<Booking> bookings;
    @JsonBackReference
    @OneToMany(mappedBy = "customer")
    private Set<Employee> employee;
    @JsonBackReference
    @OneToMany(mappedBy = "customer")
    private Set<Yard> yards;

    public Customer() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBirthDay() {
        return birthDay;
    }

    public void setBirthDay(String birthDay) {
        this.birthDay = birthDay;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Set<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(Set<Booking> bookings) {
        this.bookings = bookings;
    }

    public Set<Employee> getEmployee() {
        return employee;
    }

    public void setEmployee(Set<Employee> employee) {
        this.employee = employee;
    }

    public Set<Yard> getYards() {
        return yards;
    }

    public void setYards(Set<Yard> yards) {
        this.yards = yards;
    }
}

