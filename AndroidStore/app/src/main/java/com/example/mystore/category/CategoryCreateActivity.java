package com.example.mystore.category;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.RequestOptions;
import com.example.mystore.BaseActivity;
import com.example.mystore.MainActivity;
import com.example.mystore.R;
import com.example.mystore.application.HomeApplication;
import com.example.mystore.dto.category.CategoryItemDTO;
import com.example.mystore.service.ApplicationNetwork;
import com.google.android.material.textfield.TextInputLayout;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CategoryCreateActivity extends BaseActivity {
    private static final int READ_EXTERNAL_STORAGE_REQUEST = 1;
    private static final int PICK_IMAGE_SELECTED = 1;
    private Uri imageUri = null;
    ImageView ivPreview;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_category_create);

        ivPreview = findViewById(R.id.ivPreview);
        String url = "https://icons.veryicon.com/png/o/miscellaneous/general-icon-library/preview-65.png";
        Glide.with(this)
                .load(url)
                .apply(new RequestOptions().override(300))
                .into(ivPreview);
    }


    public void submitCategory(View view) {
        TextInputLayout categoryNameLayout = findViewById(R.id.txtCategoryName);
        TextInputLayout categoryDescriptionLayout = findViewById(R.id.txtCategoryDescription);
        String categoryName = categoryNameLayout.getEditText().getText().toString();
        String categoryDescription = categoryDescriptionLayout.getEditText().getText().toString();

        Map<String, RequestBody> params = new HashMap<>();
        params.put("name", createPartFromString(categoryName));
        params.put("description", createPartFromString(categoryDescription));

        MultipartBody.Part imagePart = null;
        if(imageUri != null) {
            String imagePath = getImagePath(imageUri);
            if (imagePath != null) {
                File file = new File(imagePath);
                RequestBody requestBody = RequestBody.create(MediaType.parse("multipart/form-data"), file);
                imagePart = MultipartBody.Part.createFormData("image", file.getName(), requestBody);
            }
        }

        ApplicationNetwork
                .getInstance()
                .getGategoriesApi()
                .create(params, imagePart)
                .enqueue(new Callback<CategoryItemDTO>() {
                    @Override
                    public void onResponse(Call<CategoryItemDTO> call, Response<CategoryItemDTO> response) {
                        if (response.isSuccessful()) {
                            Intent intent = new Intent(CategoryCreateActivity.this, MainActivity.class);
                            startActivity(intent);
                        }
                    }

                    @Override
                    public void onFailure(Call<CategoryItemDTO> call, Throwable t) {
                        Log.d("Network request", "bad: " + t.getMessage());
                    }
                });

    }

    private RequestBody createPartFromString(String value) {
        return RequestBody.create(MediaType.parse("text/plain"), value);
    }
    public void onSelectImage(View view) {
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (checkSelfPermission(Manifest.permission.READ_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
                    requestPermissions(new String[]{Manifest.permission.READ_EXTERNAL_STORAGE}, READ_EXTERNAL_STORAGE_REQUEST);
                    //return;
                }
                Intent intent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
                startActivityForResult(intent, PICK_IMAGE_SELECTED);
            }
        }
        catch(Exception ex) {
            Log.d("Network request", "Bad image: " + ex.getMessage());
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == PICK_IMAGE_SELECTED && resultCode == RESULT_OK && data != null && data.getData() != null) {
            // Get the URI of the selected image
            Uri uri = data.getData();

            imageUri = uri;

            Glide
                    .with(HomeApplication.getAppContext())
                    .load(uri)
                    .apply(new RequestOptions().override(300))
                    .into(ivPreview);

        }
    }

    private String getImagePath(Uri uri) {
        String[] projection = {MediaStore.Images.Media.DATA};
        Cursor cursor = getContentResolver().query(uri, projection, null, null, null);

        if (cursor != null) {
            int column_index = cursor.getColumnIndexOrThrow(MediaStore.Images.Media.DATA);
            cursor.moveToFirst();
            String imagePath = cursor.getString(column_index);
            cursor.close();
            return imagePath;
        }

        return null;
    }

}