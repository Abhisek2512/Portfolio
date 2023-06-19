
.portfolio {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
  flex: 1;
}

.portfolio-heading {
  text-align: center;
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 10px;
  background: linear-gradient(45deg, #FFC700, #FF5050);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  
}

.portfolio-tagline {
  text-align: center;
  font-size: 18px;
  font-style: italic;
  background: linear-gradient(45deg, #FFC700, #FF5050);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}


.project {
  width: 300px;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  
}

.project:hover {
  transform: translateY(-5px);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
}


.project img {
  width: 291px;
  height: 190px;
  border-radius: 8px;
  margin: 5px;
  object-fit: cover;
}

.project h3 {
  font-size: 20px;
  margin-top: 10px;
  background: linear-gradient(45deg, #FFC700, #FF5050);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.project p {
  font-size: 14px;
  color: #777;
  text-align: left;
  margin-top: 10px;
  background: linear-gradient(45deg, #FFC700, #FF5050);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.project-button {
  background-color: #FFC700;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;

  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
  border-radius: 12px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.project-button:hover {
  background-color: #FF5050;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
} 