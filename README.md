# COP4492_AZURE_Proejct2
The project "Brain MRI Images for Brain Tumor Detection using Custom Vision from Azure Cognitive Services"
This project was made for COP4492- Microsoft Azure Fundamentals 2023 to create real-life problem that needs an Artificial Intelligence/
Azure Cognitive Services, specifically, the vision service, which is a PaaS solution.The model was deployed to the Static Web App on Azure.

## dataset
dataset was taken from https://www.kaggle.com/datasets/navoneel/brain-mri-images-for-brain-tumor-detection?resource=download

## deploy static web app for this project
https://ambitious-glacier-0d92eef10.3.azurestaticapps.net/

# PROJECT OVERIVEW
Here are the steps that I used to do this project:
1.	Create Custom Vision resources. 
2.	Create a new project by these steps:
2.1.	 By entering a name and description for the project.<br>
2.2.	Select the "Custom Vision Training Resource" option.<br>
2.3.	Choose "Classification" as the project type.<br>
2.4.	Under "Classification Types," select "Multiclass," which categorizes images into single categories (each submitted image will be assigned the most appropriate tag).<br>
2.5.	Next, choose one of the "Generic Compact" domains.<br>
3.	Upload and tag images
4.	Train the classifier
5.	Evaluate the classifier: by using Precision, Recall  
6.	Test your model and Use the predicted image for training.
7.	export the model
8.	Create a simple HTML  file that has the HTML, CSS, AND JAVASCRIPT code and pushed the code on GitHub
9.	Create a Static Web App by hosting the repo that I have created


# Solution Infrastructure Diagram for custome vision
![Solution Infrastructure Diagram](https://github.com/umnaih/COP4492--Proejct/blob/main/Solution%20Infrastructure%20Diagram.png)
# Solution Infrastructure Diagram for Static Web App
![Solution Infrastructure Diagram](https://github.com/umnaih/COOP4992_AZURE_PORJECT2/blob/main/webAPP.png)

# Precision and Recall 
## in iteration 1
![Precision and Recall 1](https://github.com/umnaih/COOP4992_AZURE_PORJECT2/blob/main/iteration1.png)
## in iteration 2
![Precision and Recall 2](https://github.com/umnaih/COOP4992_AZURE_PORJECT2/blob/main/webAPP.png)

# test
## test for an image has a Tumor
### in iteration 1
![has Toumor 1](https://github.com/umnaih/COP4492--Proejct/blob/main/YES-iteration%201.png)
### in iteration 2
![has Toumor 2](https://github.com/umnaih/COP4492--Proejct/blob/main/YES-iteration%202.png)


## test for an image does not have a Tumor
### in iteration 1
![does not have a Tumor 1](https://github.com/umnaih/COP4492--Proejct/blob/main/NO-iteration%201.png)
### in iteration 2
![does not have a Tumor 2](https://github.com/umnaih/COP4492--Proejct/blob/main/NO-iteration%202.png)

## Static Web App
![Static Web App](https://github.com/umnaih/COOP4992_AZURE_PORJECT2/blob/main/webAPPsCRREN.png)
