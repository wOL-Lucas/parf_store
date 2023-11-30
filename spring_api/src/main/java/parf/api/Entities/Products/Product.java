package parf.api.Entities.Products;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter @NoArgsConstructor @AllArgsConstructor
@Table(name = "products")
@Entity(name = "product")
@EqualsAndHashCode(of="product_id")
public class Product {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long product_id;
    private String product_name;
    private String category;
    private String brand;
    private double price;
    private String description;

    private int stock_quantity;
}
