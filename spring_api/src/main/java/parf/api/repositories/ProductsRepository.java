package parf.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import parf.api.Entities.Products.Product;

public interface ProductsRepository extends JpaRepository<Product, String> {
}
