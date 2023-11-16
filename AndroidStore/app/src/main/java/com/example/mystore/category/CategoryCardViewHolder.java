package com.example.mystore.category;

import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.mystore.R;

public class CategoryCardViewHolder extends RecyclerView.ViewHolder {
    private ImageView category_card_image;
    private TextView category_card_name;
    private Button btnDelete;

    public CategoryCardViewHolder(@NonNull View itemView) {
        super(itemView);
        category_card_image = itemView.findViewById(R.id.category_card_image);
        category_card_name = itemView.findViewById(R.id.category_card_name);
        btnDelete = itemView.findViewById(R.id.btnDelete);
    }

    public ImageView getCategory_card_image() {
        return category_card_image;
    }

    public TextView getCategory_card_name() {
        return category_card_name;
    }

    public Button getBtnDelete() {
        return btnDelete;
    }
}
