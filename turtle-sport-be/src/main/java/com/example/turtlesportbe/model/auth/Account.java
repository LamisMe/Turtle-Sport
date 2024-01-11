package com.example.turtlesportbe.model.auth;

import com.example.turtlesportbe.model.Team;
import com.example.turtlesportbe.model.LikeDetail;
import com.example.turtlesportbe.model.News;
import com.example.turtlesportbe.model.Post;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "username", nullable = false)
    private String username;
    @JsonIgnore
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "is_deleted", columnDefinition = "int(1) default 0")
    private boolean isDeleted;
    @JsonBackReference
    @OneToMany(mappedBy = "account")
    private Set<Post> posts;
    @ManyToOne
    @JoinColumn(name = "team_id", referencedColumnName = "id")
    private Team team;
    @JsonBackReference
    @OneToMany(mappedBy = "account")
    private Set<LikeDetail> likeDetails;
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "account_roles",
            joinColumns = @JoinColumn(name = "account_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roleSet;
    @JsonBackReference
    @OneToMany(mappedBy = "account")
    private Set<News> newsSet;


    public Account() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer accountId) {
        this.id = accountId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String userName) {
        this.username = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isDeleted() {
        return isDeleted;
    }

    public void setDeleted(boolean deleted) {
        isDeleted = deleted;
    }

    public Set<Role> getRoleSet() {
        return roleSet;
    }

    public void setRoleSet(Set<Role> roleSet) {
        this.roleSet = roleSet;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public Set<Post> getPosts() {
        return posts;
    }

    public void setPosts(Set<Post> posts) {
        this.posts = posts;
    }

    public Set<LikeDetail> getLikeDetails() {
        return likeDetails;
    }

    public void setLikeDetails(Set<LikeDetail> likeDetails) {
        this.likeDetails = likeDetails;
    }

    public Set<News> getNewsSet() {
        return newsSet;
    }

    public void setNewsSet(Set<News> newsSet) {
        this.newsSet = newsSet;
    }
}