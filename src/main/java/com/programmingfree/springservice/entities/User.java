package com.programmingfree.springservice.entities;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "username")
    private String username;

    @Column(name = "user_password")
    private String userPassword;

    @Column(name = "enabled")
    private boolean enabled;

    public int getId() {
        return id;
    }

    public void setId(int adminId) {
        this.id = adminId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String adminName) {
        this.username = adminName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String adminPassword) {
        this.userPassword = adminPassword;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }
}
