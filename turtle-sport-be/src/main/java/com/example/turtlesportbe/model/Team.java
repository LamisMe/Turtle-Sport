package com.example.turtlesportbe.model;

import com.example.turtlesportbe.model.auth.Account;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "teams")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nameGroup;
    @Column(name = "is_deleted", columnDefinition = "int(1) default 0")
    private boolean isDeleted;
    @JsonBackReference
    @OneToMany(mappedBy = "team")
    private Set<Account> account;
    @JsonBackReference
    @OneToMany (mappedBy = "team")
    private  Set<Message> messageSet;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameGroup() {
        return nameGroup;
    }

    public void setNameGroup(String nameGroup) {
        this.nameGroup = nameGroup;
    }

    public Set<Account> getAccount() {
        return account;
    }

    public void setAccount(Set<Account> account) {
        this.account = account;
    }

    public Set<Message> getMessageSet() {
        return messageSet;
    }

    public void setMessageSet(Set<Message> messageSet) {
        this.messageSet = messageSet;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public Team() {
    }
}
