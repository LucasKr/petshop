package services;

import java.util.NoSuchElementException;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.stream.Stream;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import mocking.BaseRepo;
import model.Animal;

/**
 * Root resource (exposed at "myresource" path)
 */
@Path("animals")
public class AnimalsService {

    private final CopyOnWriteArrayList<Animal> ANIMALS = BaseRepo.getAnimals();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getIt() {
        return Response.ok(ANIMALS, MediaType.APPLICATION_JSON).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findById(@PathParam("id") int id) {
        try {
            Animal res = ANIMALS.stream().filter(i -> i.getId() == id).findFirst().get();
            if (res == null) {
                return Response.status(Status.NOT_FOUND).build();
            }
            return Response.ok(res, MediaType.APPLICATION_JSON).build();
        } catch (NoSuchElementException e) {
            return Response.ok("Animal not found!", MediaType.APPLICATION_JSON).build();
        }
    }
}
