package com.example.Ciclo4_Mintic.repository;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import com.example.Ciclo4_Mintic.model.Order;
import com.example.Ciclo4_Mintic.repository.crudRepository.OrderCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;


@Repository
public class OrderRepository {

    @Autowired
    private OrderCrudRepository OrderCrudRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Order> getAll(){
        return OrderCrudRepository.findAll();
    }

    public Optional <Order> getById(Integer id){
        return OrderCrudRepository.findById(id);
    }

    public List<Order> getByZone(String zone){
        return OrderCrudRepository.findByZone(zone);
    }

    public List<Order> ordersSalesManById (Integer id) {
        Query query = new Query();
        
        Criteria criterio = Criteria.where("salesMan.id").is(id);
        query.addCriteria(criterio);

        List <Order> orders = mongoTemplate.find(query, Order.class);
        return orders;
    
    }


    public List<Order> ordersSalesManByState (String state, Integer id){
        Query query = new Query();

        Criteria criterio = Criteria.where("salesMan.id").is(id).and("status").is(state);
        query.addCriteria(criterio);

        List<Order> orders = mongoTemplate.find(query, Order.class);
        return orders;

    }

    public List<Order> ordersSalesManByDate(String dateStr, Integer id) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        Query query = new Query();
        
        Criteria dateCriteria = Criteria.where("registerDay")
                        .gte(LocalDate.parse(dateStr, dtf).minusDays(1).atStartOfDay())
                        .lt(LocalDate.parse(dateStr, dtf).plusDays(1).atStartOfDay())
                        .and("salesMan.id").is(id);
        
        query.addCriteria(dateCriteria);
        
        List<Order> orders = mongoTemplate.find(query,Order.class);
        
        return orders;       
    }

    

    public Order save(Order order){
        return OrderCrudRepository.save(order);
    }

    public void delete(Order order){
        OrderCrudRepository.delete(order);

    }


    public Optional <Order> lastOrderId(){
        return OrderCrudRepository.findTopByOrderByIdDesc();
    }


}

