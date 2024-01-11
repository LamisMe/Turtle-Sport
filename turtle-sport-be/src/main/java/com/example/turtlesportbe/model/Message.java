package com.example.turtlesportbe.model;

import com.example.turtlesportbe.model.auth.Account;
import jakarta.persistence.*;

@Entity
@Table(name = "messages")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(unique = true)
    private String path;
    @Column(name = "is_deleted",columnDefinition = "bit(1) default 0",nullable = false)
    private Boolean isDeleted;
    @ManyToOne
    @JoinColumn(name = "senderAccountId", referencedColumnName = "id")
    private Account senderAccount;
    @ManyToOne
    @JoinColumn(name = "team_id", referencedColumnName = "id")
    private Team team;

    public Message() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Boolean getDeleted() {
        return isDeleted;
    }

    public void setDeleted(Boolean deleted) {
        isDeleted = deleted;
    }

    public Account getSenderAccount() {
        return senderAccount;
    }

    public void setSenderAccount(Account senderAccount) {
        this.senderAccount = senderAccount;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }
}
