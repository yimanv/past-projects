package com.example.anagram;



import android.os.Bundle;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;

import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends Activity {
	
	
	
	public EditText nameEdit;
	public EditText educEdit;
	public EditText ageEdit;
	public String age;
	public String name;
	public String educ;
    public String [] agearr= new String[10];
    public String [] namearr= new String[10];
    public String [] educarr= new String[10];


	public int count=0;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		
		nameEdit = (EditText) findViewById(R.id.nameEditText);
		educEdit = (EditText) findViewById(R.id.educationEditText);
		ageEdit = (EditText) findViewById(R.id.ageEditText);
		
		
		Button buttonSubmit = (Button) findViewById(R.id.submitButton);
        buttonSubmit.setOnClickListener(new OnClickListener() {			
			public void onClick(View v) {
				
				
				if(nameEdit.getText().toString().length() ==0 || educEdit.getText().toString().length() ==0 || ageEdit.getText().toString().length() ==0  )
				{ 
					Toast toast = Toast.makeText(MainActivity.this, "All fields need to be filled", Toast.LENGTH_SHORT);
					toast.show();
					
				}
				
				else
				{
					
				
				 SharedPreferences sharedPreferences = getSharedPreferences("info.txt", Context.MODE_WORLD_READABLE);
				 
				 String information =sharedPreferences.getString("inf", "");
				 if(information.length() > 50)
				 {
					 information = "";
				 }
				 information = information + "Name:" +nameEdit.getText().toString();
				
				 SharedPreferences.Editor editor = sharedPreferences.edit(); // Call edit() to get a SharedPreferences.Editor
				
				 editor.putString("inf",information);// Add values with method putString()
		 
				 editor.commit();
				
			
		      
		      
				
				startActivity(new Intent(getApplicationContext(), Difficulty.class));
				finish();
				}
			}
		});
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
