package com.example.mystore;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.util.Log;
import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.RequestOptions;
import com.example.mystore.category.CategoriesAdapter;
import com.example.mystore.contants.Urls;
import com.example.mystore.dto.category.CategoryItemDTO;
import com.example.mystore.service.ApplicationNetwork;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends BaseActivity {

    private RecyclerView rvList;
    CategoriesAdapter adapter;

    private void onDelete(CategoryItemDTO category) {
        Log.d("Category delete", category.getName());
        ApplicationNetwork
                .getInstance()
                .getGategoriesApi()
                .delete(category.getId())
                .enqueue(new Callback<Void>() {
                    @Override
                    public void onResponse(Call<Void> call, Response<Void> response) {
                        if(response.isSuccessful()) {
                            loadListServer();
                        }
                    }

                    @Override
                    public void onFailure(Call<Void> call, Throwable t) {

                    }
                });
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ImageView myImage = findViewById(R.id.myImage);
        String url = Urls.BASE+"/images/123.jpg";
        //String url = Urls.BASE+"/images/1.jpeg";
        Glide.with(this)
                .load(url)
                .apply(new RequestOptions().override(600))
                .into(myImage);

        rvList = findViewById(R.id.rvList);
        rvList.setHasFixedSize(true);
        rvList.setLayoutManager(new GridLayoutManager(this, 1, RecyclerView.VERTICAL, false));
        rvList.setAdapter(new CategoriesAdapter(new ArrayList<>(), MainActivity.this::onDelete));

        loadListServer();
    }

    private void loadListServer() {
        ApplicationNetwork
                .getInstance()
                .getGategoriesApi()
                .list()
                .enqueue(new Callback<List<CategoryItemDTO>>() {
                    @Override
                    public void onResponse(Call<List<CategoryItemDTO>> call, Response<List<CategoryItemDTO>> response) {
                        if(response.isSuccessful()) {
                            List<CategoryItemDTO> data = response.body();
                            adapter = new CategoriesAdapter(data, MainActivity.this::onDelete);
                            rvList.setAdapter(adapter);

                        }
                    }

                    @Override
                    public void onFailure(Call<List<CategoryItemDTO>> call, Throwable t) {
                    }
                });
    }
}