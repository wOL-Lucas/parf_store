package parf.api.controller;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import parf.api.Entities.Account.Account;
import parf.api.Entities.Products.Product;
import parf.api.repositories.ProductsRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class router {

    @Autowired
    ProductsRepository productsRepository;

    @GetMapping
    public String controller(){
        return "ok";
    }

    @GetMapping("/public")
    public String publicAccess(){
        return "public";
    }

    @GetMapping("/products")
    public List<Product> products(){
        return productsRepository.findAll();
    }

    @PostMapping("/products")
    public Product createProduct(@RequestBody @Valid Product product){
        return productsRepository.save(product);
    }

    @GetMapping("/account")
    public Account Account(){
        return new Account("00001-0");
    }
}
