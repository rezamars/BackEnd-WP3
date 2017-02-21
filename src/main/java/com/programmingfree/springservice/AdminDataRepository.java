package com.programmingfree.springservice;

import org.springframework.data.repository.Repository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AdminDataRepository extends Repository<AdminData, Integer> {
}
