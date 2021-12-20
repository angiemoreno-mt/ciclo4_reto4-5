package com.example.Ciclo4_Mintic.repository.crudRepository;

import java.util.List;

import com.example.Ciclo4_Mintic.model.Clothe;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface ClotheCrudRepository extends  MongoRepository <Clothe, String>{

    @Query
    public List<Clothe> findByPrice( double price);


    public List<Clothe> findByDescriptionContainingIgnoreCase(String word);
    
}
