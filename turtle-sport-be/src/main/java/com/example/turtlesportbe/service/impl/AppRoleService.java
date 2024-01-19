package com.example.turtlesportbe.service.impl;

import com.example.turtlesportbe.repository.IAppRoleRepository;
import com.example.turtlesportbe.service.IAppRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppRoleService implements IAppRoleService {
    @Autowired
    private IAppRoleRepository appRoleRepository;
    @Override
    public void saveAppRole(Integer account) {
        appRoleRepository.saveAccount(account);
    }
}
