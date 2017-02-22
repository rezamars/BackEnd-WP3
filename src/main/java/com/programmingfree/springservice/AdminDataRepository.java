package com.programmingfree.springservice;

import com.programmingfree.springservice.entities.User;
import org.springframework.data.repository.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AdminDataRepository extends Repository<User, Integer> {
}
