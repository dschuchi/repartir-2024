package ar.com.grupoesfera.repartir.model;

import java.math.BigDecimal;

public class Gasto {

    private BigDecimal monto;

    private String nombre;

    public BigDecimal getMonto() {
        return  monto;
    }

    public void setMonto(BigDecimal monto){
        this.monto = monto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
