# Use an official Maven image with JDK 15 as the base
FROM maven:3.8.4-openjdk-15 as build-stage

# Set the working directory
WORKDIR /app

# Copy the Maven configuration files
COPY backend/pom.xml .

# Download the dependencies
RUN mvn dependency:go-offline

# Copy the rest of the application's source code
COPY backend/ .

# Build the application
RUN mvn package -DskipTests

# Use an official OpenJDK 15 image as the final base image
FROM openjdk:15-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the built JAR from the build-stage
COPY --from=build-stage /app/target/your-app.jar app.jar

# Run the application
CMD ["java", "-jar", "app.jar"]
