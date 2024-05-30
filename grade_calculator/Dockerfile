FROM maven:3.8.4-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:21
COPY --from=build /target/demo-0.0.1-SNAPSHOT.jar /opt/app/demo.jar
CMD ["java", "-jar", "/opt/app/(your file name).jar"]