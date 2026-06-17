cmake_minimum_required(VERSION 3.10)
project(SertariaServer)

set(CMAKE_CXX_STANDARD 20)

# Add source files
file(GLOB_RECURSE SOURCES "src/*.cpp")

# Executable
add_executable(sertaria_server ${SOURCES})

# Windows Socket Library (Winsock2)
if(WIN32)
    target_link_libraries(sertaria_server ws2_32)
endif()
